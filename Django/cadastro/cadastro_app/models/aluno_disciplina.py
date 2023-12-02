from django.db import models
import django.contrib.auth
from cadastro_app.models import Disciplina


class AlunoDisciplina(models.Model):
    aluno = models.ForeignKey(django.contrib.auth.get_user_model(), on_delete=models.CASCADE, null=False)
    disciplina = models.ForeignKey(Disciplina, on_delete=models.CASCADE, null=False)
    nota = models.FloatField()