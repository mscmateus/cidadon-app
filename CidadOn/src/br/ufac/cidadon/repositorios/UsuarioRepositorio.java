package br.ufac.cidadon.repositorios;

import java.util.*;
import javax.persistence.*;
import br.ufac.cidadon.entidades.*;

public class UsuarioRepositorio {

	private EntityManagerFactory emf;
	private EntityManager em;	
	
	public UsuarioRepositorio() {
		emf = Persistence.createEntityManagerFactory("AcademicoJPA");
		em = emf.createEntityManager();
	}

	public void adicionar(Usuario usuario) {
	
		em.getTransaction().begin();
		em.persist(usuario);
		em.getTransaction().commit();
		
	}
	
	public Usuario recuperar(long id) {
		return em.find(Usuario.class, id);
	}
	
	public void atualizar (Usuario usuario) {
		
		em.getTransaction().begin();
		em.merge(usuario);
		em.getTransaction().commit();
		
	}
	
	public void remover(Usuario usuario) {
		
		em.getTransaction().begin();
		em.remove(usuario);
		em.getTransaction().commit();
		
	}
	
	public List<Usuario> recuperarTodos(){
		
		Query query = em.createNamedQuery("Usuario.todos");
		return query.getResultList();
		
	}
	public List<Usuario> recuperarTodosPorNome(){
		Query query = em.createNamedQuery("Usuario.todosPorNome");
		return query.getResultList();
	}
	public List<Usuario> nomeContendo(String termo){
		Query query = em.createNamedQuery("Usuario.nomeContendo");
		query.setParameter("termo", "%"+termo+"%");
		return query.getResultList();
	}
	public List<Usuario> usrCpf(long cpf){
		Query query = em.createNamedQuery("Usuario.usrCpf");
		query.setParameter("valorCpf",cpf);
		return query.getResultList();
	}
	public void encerrar() {
		em.close();
		emf.close();
	}
	
}
