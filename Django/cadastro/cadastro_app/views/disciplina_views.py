from rest_framework import views, status
from rest_framework.response import Response
from cadastro_app.models import Disciplina
from cadastro_app.serializers import DisciplinaSerializer

class CadastroNovaDisciplinaView(views.APIView):
    def post(self, request):
        serializer = DisciplinaSerializer(data=request.data)
        if serializer.is_valid():
            disciplina = Disciplina.objects.create(**serializer.validated_data)
            return Response(DisciplinaSerializer(disciplina).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)