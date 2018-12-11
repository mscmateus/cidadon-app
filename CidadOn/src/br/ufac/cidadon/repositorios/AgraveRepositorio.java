package br.ufac.cidadon.repositorios;

import java.util.*;
import javax.persistence.*;
import br.ufac.cidadon.entidades.*;

public class AgraveRepositorio {

	private EntityManagerFactory emf;
	private EntityManager em;	
	
	public AgraveRepositorio() {
		emf = Persistence.createEntityManagerFactory("AcademicoJPA");
		em = emf.createEntityManager();
	}

	public void adicionar(Agrave agrave) {
	
		em.getTransaction().begin();
		em.persist(agrave);
		em.getTransaction().commit();
		
	}
	
	public Agrave recuperar(long id) {
		return em.find(Agrave.class, id);
	}
	
	public void atualizar (Agrave agrave) {
		
		em.getTransaction().begin();
		em.merge(agrave);
		em.getTransaction().commit();
		
	}
	
	public void remover(Agrave agrave) {
		
		em.getTransaction().begin();
		em.remove(agrave);
		em.getTransaction().commit();
		
	}
	
	public List<Agrave> recuperarTodos(){
		
		Query query = em.createNamedQuery("Agrave.todos");
		return query.getResultList();
		
	}
//	public List<Agrave> recuperarTodosPorTitulo(){
//		Query query = em.createNamedQuery("Agrave.todosPorTitulo");
//		return query.getResultList();
//	}
//	public List<Agrave> tituloContendo(String termo){
//		Query query = em.createNamedQuery("Agrave.tituloContendo");
//		query.setParameter("termo", "%"+termo+"%");
//		return query.getResultList();
//	}
	public void encerrar() {
		em.close();
		emf.close();
	}
	
}
