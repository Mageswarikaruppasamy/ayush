from flask import Flask, render_template, request, redirect, url_for, flash, session
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

app=Flask(__name__)
app.secret_key="mesh"
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://mageswari:abracadabra@localhost/ayush'
db=SQLAlchemy(app)
bcrypt=Bcrypt(app)


app.app_context().push()


class Data(db.Model):
    __tablename__='userinfo'
    id=db.Column(db.Integer,primary_key=True)
    name=db.Column(db.String(30))
    mail=db.Column(db.String(50))
    password=db.Column(db.String(60))

    def __init__(self,name,mail,password):
        self.name=name
        self.mail=mail
        self.password=password

@app.route('/', methods=['POST','GET'])

@app.route('/home', methods=['POST', 'GET'])
def home():
    if request.method == 'POST':
        name = request.form['name']
        mail = request.form['mail']
        password = request.form['password']

        # Check if the username already exists
        existing_user = Data.query.filter_by(name=name).first()
        if existing_user:
            flash("Username already exists. Please choose a different one.", "danger")
            return redirect(url_for("home"))  # Reload the registration page

        encrypted_password = bcrypt.generate_password_hash(password).decode("utf-8")

        new_user = Data(name, mail, encrypted_password)
        db.session.add(new_user)
        db.session.commit()

        return redirect(url_for("login"))

    return render_template("register.html")


@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        name = request.form['name']
        password = request.form['password']

        if name and password:
            user = Data.query.filter_by(name=name).first()  # Get only one user
            if user and bcrypt.check_password_hash(user.password, password):
                session['user_id'] = user.id  # Store user ID in session
                return redirect(url_for("dashboard"))
            else:
                flash("Login Unsuccessful", "danger")
        else:
            flash("Please fill username and password", "warning")

    return render_template("login.html")


@app.route('/dashboard')
def dashboard():
    if 'user_id' not in session:
        return redirect(url_for('login'))  # Redirect if not logged in

    user = Data.query.filter_by(id=session['user_id']).first()  # Fetch current user
    if not user:
        flash("User not found. Please log in again.", "danger")
        return redirect(url_for('login'))

    return render_template("dashboard.html", user_name=user.name)  # Pass user name to template



@app.route('/virtual-garden')
def virtual_garden():
    return render_template('virtual_garden.html')

@app.route('/remedies')
def remedies():
    return render_template('remedies.html')

@app.route('/quiz', methods=['GET', 'POST'])
def quiz():
    return render_template('quiz.html')

@app.route('/logout')
def logout():
    session.pop('user_id', None)
    return redirect(url_for('login'))

if __name__ == '__main__':
    #with app.app_context():
        #db.create_all()
    app.run(host="0.0.0.0", port=5000)