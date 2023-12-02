from django.db import models
from cadastro_app.models import Disciplina
import django.contrib.auth

class Monitor(models.Model):
    aluno = models.ForeignKey(django.contrib.auth.get_user_model(), on_delete=models.CASCADE, null=False)
    username = models.CharField(max_length=10, primary_key=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=18)
    nota = models.FloatField
    disciplina = models.ForeignKey(Disciplina, on_delete=models.SET_NULL, null=True)
