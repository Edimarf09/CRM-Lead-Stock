from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.
class User(AbstractUser):
    class Role(models.TextChoices):
        PLATFORM_ADMIN = "PLATFORM_ADMIN", "Admin da Plataforma"
        ORG_ADMIN = "ORG_ADMIN", "Admin da Empresa"
        FUNCIONARIO = "FUNCIONARIO", "Funcionário"

    role = models.CharField(
        max_length=20,
        choices=Role.choices,
        default=Role.FUNCIONARIO,
    )

    def __str__(self):
        return f"{self.username} ({self.get_role_display()})"
