from django.urls import path
from cadastro_app.views import CadastroNovoAlunoView, CadastroNovoMonitorView, CadastroNovoProfessorView, CadastroNovaDisciplinaView, CadastroNovoExercicioView

urlpatterns = [
    path('cadastroAluno/', CadastroNovoAlunoView.as_view(), name='cadastroAluno'),
    path('cadastroMonitor/', CadastroNovoMonitorView.as_view(), name='cadastroMonitor'),
    path('cadastroProfessor/', CadastroNovoProfessorView.as_view(), name='cadastroProfessor'),
    path('cadastroDisciplina/', CadastroNovaDisciplinaView.as_view(), name='cadastroDisciplina'),
    path('cadastroExercicio/', CadastroNovoExercicioView.as_view(), name='cadastroExercicio')
]