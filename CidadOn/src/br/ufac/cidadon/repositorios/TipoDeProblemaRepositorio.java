package br.ufac.cidadon.repositorios;

import java.util.*;
import javax.persistence.*;
import br.ufac.cidadon.entidades.*;

public class TipoDeProblemaRepositorio {

	private EntityManagerFactory emf;
	private EntityManager em;	
	
	public TipoDeProblemaRepositorio() {
		emf = Persistence.createEntityManagerFactory("AcademicoJPA");
		em = emf.createEntityManager();
	}

	public void adicionar(TipoDeProblema tipoDeProblema) {
	
		em.getTransaction().begin();
		em.persist(tipoDeProblema);
		em.getTransaction().commit();
		
	}
	
	public TipoDeProblema recuperar(long id) {
		return em.find(TipoDeProblema.class, id);
	}
	
	public void atualizar (TipoDeProblema tipoDeProblema) {
		
		em.getTransaction().begin();
		em.merge(tipoDeProblema);
		em.getTransaction().commit();
		
	}
	
	public void remover(TipoDeProblema tipoDeProblema) {
		
		em.getTransaction().begin();
		em.remove(tipoDeProblema);
		em.getTransaction().commit();
		
	}
	
	public List<TipoDeProblema> recuperarTodos(){
		
		Query query = em.createNamedQuery("TipoDeProblema.todos");
		return query.getResultList();
		
	}
	public List<TipoDeProblema> recuperarTodosPorNome(){
		Query query = em.createNamedQuery("TipoDeProblema.todosPorTitulo");
		return query.getResultList();
	}
	public List<TipoDeProblema> nomeContendo(String termo){
		Query query = em.createNamedQuery("TipoDeProblema.TituloContendo");
		query.setParameter("termo", "%"+termo+"%");
		return query.getResultList();
	}
	public List<TipoDeProblema> usrCpf(long cpf){
		Query query = em.createNamedQuery("TipoDeProblema.usrCpf");
		query.setParameter("valorCpf",cpf);
		return query.getResultList();
	}
public List<TipoDeProblema> recuperarPorMesesVisibilidade(){
		
		Query query = em.createNamedQuery("TipoDeProblema.porMesesVisibilidade");
		return query.getResultList();
}
	public void encerrar() {
		em.close();
		emf.close();
	}
	
}
