"""
Registro dos módulos que aparecem no menu lateral.

Hoje a lista é fixa (só os módulos padrão). Quando o app `modules`
existir, é aqui que a consulta ao banco vai entrar — filtrando pelos
módulos liberados para a empresa e para o usuário logado.
O template não muda: ele só percorre `sidebar_modules`.
"""

# Módulos que todo cliente tem, independente do plano.
MODULOS_PADRAO = [
    {
        "slug": "dashboard",
        "label": "Dashboard",
        "icon": "images/icone_dashboard.svg",
        "url_name": "dashboard:home",
    },
    {
        "slug": "configuracoes",
        "label": "Configurações",
        "icon": "images/icone_config.svg",
        "url_name": None,  # tela ainda não existe
    },
]


def sidebar(request):
    """Injeta a lista de módulos em todos os templates."""
    return {"sidebar_modules": MODULOS_PADRAO}
