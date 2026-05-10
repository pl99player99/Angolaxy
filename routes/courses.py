from flask import Blueprint, render_template

courses_bp = Blueprint('courses', __name__)

@courses_bp.route('/')
def list_courses():
    courses = [
        {
            'id': 1,
            'title': 'Empreendedorismo em Angola',
            'subtitle': 'Como abrir e gerir o seu negócio no mercado angolano.',
            'instructor': {'name': 'Dr. António Silva', 'image': '/static/img/instructor1.jpg'},
            'price_formatted': 'Grátis',
            'level': 'Iniciante',
            'rating': 4.8,
            'reviews_count': 120,
            'students_count': 1500,
            'image': '/static/img/course1.jpg'
        },
        {
            'id': 2,
            'title': 'Marketing Digital para o Mercado Local',
            'subtitle': 'Estratégias de marketing focadas no público angolano.',
            'instructor': {'name': 'Maria Santos', 'image': '/static/img/instructor2.jpg'},
            'price_formatted': '5.000 Kz',
            'level': 'Intermediário',
            'rating': 4.5,
            'reviews_count': 85,
            'students_count': 950,
            'image': '/static/img/course2.jpg'
        }
    ]
    categories = [
        {'id': 1, 'name': 'Negócios', 'icon': 'fa-briefcase'},
        {'id': 2, 'name': 'Tecnologia', 'icon': 'fa-laptop-code'},
        {'id': 3, 'name': 'Marketing', 'icon': 'fa-bullhorn'}
    ]
    return render_template('courses/list.html', courses=courses, categories=categories)

@courses_bp.route('/<int:course_id>')
def course_details(course_id):
    # Simulated course data
    course = {
        'id': course_id,
        'title': 'Empreendedorismo em Angola',
        'subtitle': 'O guia definitivo para o sucesso empresarial em Luanda e além.',
        'description': 'Este curso aborda os desafios e oportunidades únicos do mercado angolano...',
        'instructor': {
            'name': 'Dr. António Silva',
            'title': 'Especialista em Gestão de Negócios',
            'image': '/static/img/instructor1.jpg',
            'rating': 4.9,
            'courses_count': 5,
            'students_count': 12000,
            'bio': 'Com mais de 20 anos de experiência no mercado angolano...'
        },
        'category': {'name': 'Negócios'},
        'price_formatted': 'Grátis',
        'original_price_formatted': '10.000 Kz',
        'discount_percentage': 100,
        'discount_ends': '2 dias',
        'rating': 4.8,
        'reviews_count': 120,
        'students_count': 1500,
        'level': 'Iniciante',
        'last_update': 'Maio 2026',
        'duration_formatted': '10 horas',
        'lessons_count': 24,
        'image': '/static/img/course1.jpg',
        'learning_objectives': ['Abrir uma empresa em Angola', 'Gestão de fluxo de caixa', 'Marketing local'],
        'prerequisites': ['Vontade de aprender', 'Conhecimento básico de informática'],
        'modules': [
            {
                'title': 'Introdução ao Mercado Angolano',
                'duration': '2h',
                'lessons': [
                    {'title': 'Panorama Económico', 'duration': '30min', 'type': 'video', 'is_free': True},
                    {'title': 'Oportunidades de Negócio', 'duration': '45min', 'type': 'video', 'is_free': False}
                ]
            }
        ],
        'reviews': [
            {'user': {'name': 'João Paulo', 'image': '/static/img/user1.jpg'}, 'rating': 5, 'date': '10/05/2026', 'comment': 'Excelente curso!'}
        ]
    }
    return render_template('courses/details.html', course=course)
