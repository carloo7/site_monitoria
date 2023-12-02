from rest_framework import serializers
from cadastro_app.models import Exercicio

class ExercicioSerializer(serializers.ModelSerializer):

    class Meta:
        model = Exercicio
        fields = '__all__'