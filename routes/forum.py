from flask import Blueprint, render_template

forum_bp = Blueprint('forum', __name__)

@forum_bp.route('/')
def index():
    topics = [
        {
            'id': 1,
            'title': 'Como conseguir o primeiro emprego em TI?',
            'author': 'Mateus Manuel',
            'date': '09/05/2026',
            'replies': 15,
            'category': 'Carreira'
        },
        {
            'id': 2,
            'title': 'Dúvidas sobre o curso de Marketing',
            'author': 'Ana Bela',
            'date': '08/05/2026',
            'replies': 4,
            'category': 'Cursos'
        }
    ]
    return render_template('forum/index.html', topics=topics)

@forum_bp.route('/topic/<int:topic_id>')
def topic_details(topic_id):
    return f"Tópico {topic_id}"

@forum_bp.route('/new')
def new_topic():
    return "Página de novo tópico"
