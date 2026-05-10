from flask import Flask, render_template
from routes.main import main_bp
from routes.auth import auth_bp
from routes.courses import courses_bp
from routes.library import library_bp
from routes.forum import forum_bp
from routes.student import student_bp

app = Flask(__name__)
app.secret_key = 'all_in_one_angola_secret'

# Register Blueprints
app.register_blueprint(main_bp)
app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(courses_bp, url_prefix='/courses')
app.register_blueprint(library_bp, url_prefix='/library')
app.register_blueprint(forum_bp, url_prefix='/forum')
app.register_blueprint(student_bp, url_prefix='/student')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
