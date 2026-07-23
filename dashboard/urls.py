from django.urls import path
from django.views.generic import RedirectView

from . import views

app_name = "dashboard"

urlpatterns = [
    # /app/ manda direto pro módulo padrão
    path("", RedirectView.as_view(pattern_name="dashboard:home"), name="index"),
    # /app/dashboard/
    path("dashboard/", views.home, name="home"),
]
