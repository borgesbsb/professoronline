from dataclasses import fields
from rest_framework import serializers
from teacher.models import Professor


class ProfessorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professor
        # fields  = ('id', 'nome', 'valor_hora', 'descricao', 'foto')
        fields = '__all__'