from rest_framework import serializers
from cadastro_app.models import Monitor
import re

class MonitorSerializer(serializers.ModelSerializer):

    username = serializers.CharField(write_only=True)
    def validate_username(self, username):

        if not re.search('([0-9]{2}\.[0-9]{5}-[0-9])', username):
            raise serializers.ValidationError('O campo deve conter o seu RA (xx.xxxxx-x onde x são digitos de 0 a 9)')
        return username
    
    email = serializers.EmailField(write_only=True)
    def validate_email(self, email):
        if not re.search('([0-9]{2}\.[0-9]{5}-[0-9]@maua.br)', email):
            raise serializers.ValidationError('O e-mail de login deve ser seu email institucional (xx.xxxxx-x@maua.br)')
        return email

    class Meta:
        model = Monitor
        fields = '__all__'