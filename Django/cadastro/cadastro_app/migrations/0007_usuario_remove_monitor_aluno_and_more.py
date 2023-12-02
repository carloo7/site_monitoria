# Generated by Django 4.2.7 on 2023-12-02 17:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cadastro_app', '0006_remove_disciplina_id_remove_monitor_id_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('nome', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254, primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=10, null=True)),
                ('professor', models.BooleanField(default=False)),
                ('monitor', models.BooleanField(default=False)),
            ],
        ),
        migrations.RemoveField(
            model_name='monitor',
            name='aluno',
        ),
        migrations.RemoveField(
            model_name='monitor',
            name='disciplina',
        ),
        migrations.DeleteModel(
            name='Professor',
        ),
        migrations.DeleteModel(
            name='Monitor',
        ),
    ]