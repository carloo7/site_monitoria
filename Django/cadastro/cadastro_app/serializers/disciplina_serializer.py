from rest_framework import serializers
from cadastro_app.models import Disciplina
import re

class DisciplinaSerializer(serializers.ModelSerializer):

    codigo = serializers.CharField(write_only=True)
    def validate_codigo(self, codigo):
        if not re.search('/(tti[0-9]{3})/i'):
            raise serializers.ValidationError("O código da disciplina deve seguir o formato: tti###")
        return codigo

    class Meta:
        model = Disciplina
        fields = '__all__'