from flask import Blueprint, render_template

main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def index():
    featured_courses = [
        {
            'id': 1,
            'title': 'Empreendedorismo em Angola',
            'instructor': 'Dr. António Silva',
            'price': 'Grátis',
            'image': '/static/img/course1.jpg'
        },
        {
            'id': 2,
            'title': 'Marketing Digital para o Mercado Local',
            'instructor': 'Maria Santos',
            'price': '5.000 Kz',
            'image': '/static/img/course2.jpg'
        }
    ]
    return render_template('index.html', featured_courses=featured_courses)
