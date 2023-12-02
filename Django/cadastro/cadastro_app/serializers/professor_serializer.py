from rest_framework import serializers
from cadastro_app.models import Usuario
import re

class ProfessorSerializer(serializers.ModelSerializer):
    
    email = serializers.EmailField(write_only=True)
    def validate_email(self, email):
        if not re.search('(@maua.br$)', email):
            raise serializers.ValidationError('O email deve ser o email institucional')
        return email
    class Meta:
        model = Usuario
        fields = '__all__'