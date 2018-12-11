package br.ufac.cidadon.testes;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import br.ufac.cidadon.entidades.Usuario;
import br.ufac.cidadon.repositorios.UsuarioRepositorio;

public class UsuarioTeste {

	public static void main(String[] args) {
		
		UsuarioRepositorio ur = new UsuarioRepositorio();

		Usuario u1;
		u1 = new Usuario();
		u1.setCpf(123456);
		u1.setEmail("salomaomachadon@gmail.com");
		u1.setIdentificador(01);
		u1.setNome("França");
		u1.setLatitudeResidencia(19999);
		u1.setLongitudeResidencia(26671);
		u1.setSenha("FSFDSFGRGRF");
		DateFormat df = new SimpleDateFormat("dd-MM-yyyy");
		
		try {
			u1.setDataNascimento(df.parse("08-05-1998"));
		} catch (ParseException e) {
			e.printStackTrace();
		}
		u1.setSobrenome("Silva");
		ur.adicionar(u1);
//		ar.adicionar(a2);
//		ar.adicionar(a3);
//		ar.adicionar(a4);
//		ar.adicionar(a5);

//	
//		a1 = em.find(Aluno.class, 1l);
//		System.out.println("Aluno");
//		System.out.println(a1.getId());
//		System.out.println(a1.getNome());
//		
//		a1.setNome("Macilon Araújo");
//		
//		em.getTransaction().begin();
//		em.merge(a1);
//		em.getTransaction().commit();
//		
//		a1 = em.find(Aluno.class, 1l);
//		System.out.println("Aluno");
//		System.out.println(a1.getId());
//		System.out.println(a1.getNome());
//
//		a2 = em.find(Aluno.class, 4l);
//		System.out.println("Aluno");
//		System.out.println(a2.getId());
//		System.out.println(a2.getNome());
//	
//		em.getTransaction().begin();
//		em.remove(a2);
//		em.getTransaction().commit();
//
//		a2 = em.find(Aluno.class, 4l);
//		
//		if (a2 != null) {
//			System.out.println("Aluno");
//			System.out.println(a2.getId());
//			System.out.println(a2.getNome());
//		}else {
//			System.out.printf("Aluno (id=%d) não encontrado!", 4);
//		}
//
//		alunos = ar.recuperarTodos();
//		System.out.println("Recuperar todos alunos");
//		for (Aluno aluno : alunos) {
//			System.out.println(aluno);
//		}
//		alunos = ar.recuperarTodosPorNome();
//		System.out.println("Lista dos alunos ordenados por nome");
//		for (Aluno aluno : alunos) {
//			System.out.println(aluno);
//		}
//		
//		alunos = ar.recuperarMaioresDeIdade();
//		System.out.println("Lista dos alunos maiores de idade ordenados por nome");
//		for (Aluno aluno : alunos) {
//			System.out.println(aluno);
//		}
//		alunos = ar.recuperarMenoresDeIdade();
//		System.out.println("Lista dos alunos menores de idade ordenados por nome");
//		for (Aluno aluno : alunos) {
//			System.out.println(aluno);
//		}
//		alunos = ar.recuperarAdolescentes();
//		System.out.println("Lista dos alunos adolescentes ordenados por nome");
//		for (Aluno aluno : alunos) {
//			System.out.println(aluno);
//		}
//		alunos = ar.recuperarPorFaixaEtaria(10, 18);
//		System.out.println("Lista dos alunos adolescentes por faixa etaria ordenados por nome");
//		for (Aluno aluno : alunos) {
//			System.out.println(aluno);
//		}
//		alunos = ar.nomeContendo("S");
//		System.out.println("Lista dos alunos adolescentes por nome contendo ordenados por nome");
//		for (Aluno aluno : alunos) {
//			System.out.println(aluno);
//		}

		ur.encerrar();
	}

}
