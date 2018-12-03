package br.ufac.cidadon.repositorios;

import java.util.*;
import javax.persistence.*;
import br.ufac.cidadon.entidades.*;

public class DenunciaRepositorio {

	private EntityManagerFactory emf;
	private EntityManager em;	
	
	public DenunciaRepositorio() {
		emf = Persistence.createEntityManagerFactory("AcademicoJPA");
		em = emf.createEntityManager();
	}

	public void adicionar(Denuncia denuncia) {
	
		em.getTransaction().begin();
		em.persist(denuncia);
		em.getTransaction().commit();
		
	}
	
	public Denuncia recuperar(long id) {
		return em.find(Denuncia.class, id);
	}
	
	public void atualizar (Denuncia denuncia) {
		
		em.getTransaction().begin();
		em.merge(denuncia);
		em.getTransaction().commit();
		
	}
	
	public void remover(Denuncia denuncia) {
		
		em.getTransaction().begin();
		em.remove(denuncia);
		em.getTransaction().commit();
		
	}
	
	public List<Denuncia> recuperarTodos(){
		
		Query query = em.createNamedQuery("Denuncia.todos");
		return query.getResultList();
	}
	public List<Denuncia> recuperarTodosPorTipo(){
	Query query = em.createNamedQuery("Denuncia.todosPorTipo");
	return query.getResultList();
}
public List<Denuncia> tipoContendo(String termo){
	Query query = em.createNamedQuery("Denuncia.tipoContendo");
	query.setParameter("termo", "%"+termo+"%");
	return query.getResultList();
}
	public void encerrar() {
		em.close();
		emf.close();
	}
	
}
