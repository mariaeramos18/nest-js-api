import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfessoresService {
  private professores = [
    { id: 1, nome: 'João', disciplina: 'Matemática' },
    { id: 2, nome: 'Maria', disciplina: 'Português' },
  ];

  findAll() {
    return this.professores;
  }

  findById(id: number) {
    return this.professores.find((p) => p.id === id);
  }

  create(nome: string, disciplina: string) {
    const novoProfessor = {
      id: this.professores.length + 1,
      nome,
      disciplina,
    };
    this.professores.push(novoProfessor);
    return novoProfessor;
  }

  update(id: number, nome: string, disciplina: string) {
    const professor = this.professores.find((p) => p.id === id);
    if (!professor) return null;

    professor.nome = nome;
    professor.disciplina = disciplina;
    return professor;
  }

  delete(id: number) {
    const index = this.professores.findIndex((p) => p.id === id);
    if (index === -1) return false;

    this.professores.splice(index, 1);
    return true;
  }
}