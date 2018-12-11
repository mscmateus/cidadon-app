package br.ufac.cidadon.repositorios;

import java.util.*;
import javax.persistence.*;
import br.ufac.cidadon.entidades.*;

public class ProblemaRepositorio {

	private EntityManagerFactory emf;
	private EntityManager em;	
	
	public ProblemaRepositorio() {
		emf = Persistence.createEntityManagerFactory("AcademicoJPA");
		em = emf.createEntityManager();
	}

	public void adicionar(Problema problema) {
	
		em.getTransaction().begin();
		em.persist(problema);
		em.getTransaction().commit();
		
	}
	
	public Problema recuperar(long id) {
		return em.find(Problema.class, id);
	}
	
	public void atualizar (Problema problema) {
		
		em.getTransaction().begin();
		em.merge(problema);
		em.getTransaction().commit();
		
	}
	
	public void remover(Problema problema) {
		
		em.getTransaction().begin();
		em.remove(problema);
		em.getTransaction().commit();
		
	}
	
	public List<Problema> recuperarTodos(){
		
		Query query = em.createNamedQuery("Problema.todos");
		return query.getResultList();
		
	}
//	public List<Problema> recuperarTodosPorNome(){
//		Query query = em.createNamedQuery("Problema.todosPorDescricao");
//		return query.getResultList();
//	}
	public List<Problema> nomeContendo(String min, String max){
		Query query = em.createNamedQuery("Problema.porPeriodoCriacao");
		query.setParameter("min", min);
		query.setParameter("max", max);	
		return query.getResultList();
	}
	public List<Problema> usrCpf(String dataCriacao){
		Query query = em.createNamedQuery("Problema.porDataCriacao");
		query.setParameter("dataCriacao",dataCriacao);
		return query.getResultList();
	}

	public List<Problema> recuperarProblemasResolvidos(){
		
		Query query = em.createNamedQuery("Problema.todosResolvidos");
		return query.getResultList();
		
	}	
	public List<Problema> recuperarProblemasNaoResolvidos(){
		
		Query query = em.createNamedQuery("Problema.todosNaoResolvidos");
		return query.getResultList();
		
	}
	public void encerrar() {
		em.close();
		emf.close();
	}
	
}
