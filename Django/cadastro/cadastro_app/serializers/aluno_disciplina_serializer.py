from rest_framework import serializers
from cadastro_app.models import AlunoDisciplina

class AlunoDisciplinaSerializer(serializers.ModelSerializer):
    class Meta:
        model = AlunoDisciplina
        fields = "__all__"