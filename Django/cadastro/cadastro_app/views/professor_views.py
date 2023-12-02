from rest_framework import views, status
from rest_framework.response import Response
from cadastro_app.models import Usuario
from cadastro_app.serializers import ProfessorSerializer

class CadastroNovoProfessorView(views.APIView):
    def post(self, request):
        serializer = ProfessorSerializer(data=request.data)
        if serializer.is_valid():
            professor = Usuario.objects.create(**serializer.validated_data)
            return Response(ProfessorSerializer(professor).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)