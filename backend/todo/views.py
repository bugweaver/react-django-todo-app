from rest_framework import viewsets
from django.db.models import Case, When, Value, IntegerField
from .models import Todo
from .serializer import TodoSerializer


class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    ordering_fields = ['id', 'completed']

    def get_queryset(self):
        return self.queryset.annotate(
            completed_order=Case(
                When(completed=True, then=Value(1,output_field=IntegerField())),
                default=Value(0, output_field=IntegerField())
            )
        ).order_by('completed_order', '-id')
