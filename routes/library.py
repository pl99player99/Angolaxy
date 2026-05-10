from flask import Blueprint, render_template

library_bp = Blueprint('library', __name__)

@library_bp.route('/')
def index():
    materials = [
        {
            'id': 1,
            'title': 'Guia do Investidor em Angola',
            'description': 'Tudo o que você precisa saber sobre investimentos.',
            'type': 'E-book',
            'thumbnail': '/static/img/library1.jpg'
        },
        {
            'id': 2,
            'title': 'Modelo de Plano de Negócios',
            'description': 'Template pronto para usar no seu projeto.',
            'type': 'Documento',
            'thumbnail': '/static/img/library2.jpg'
        }
    ]
    return render_template('library/index.html', materials=materials)

@library_bp.route('/<int:material_id>')
def material_details(material_id):
    return f"Detalhes do material {material_id}"
