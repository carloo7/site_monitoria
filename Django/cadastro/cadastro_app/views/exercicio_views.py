from rest_framework import views, status
from rest_framework.response import Response
from cadastro_app.serializers import ExercicioSerializer
from cadastro_app.models import Exercicio

class CadastroNovoExercicioView(views.APIView):
    def post(self, request):
        serializer = ExercicioSerializer(data=request.data)
        if serializer.is_valid():
            exercicio = Exercicio.objects.create(**serializer.validated_data)
            return Response(ExercicioSerializer(exercicio).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)