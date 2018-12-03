package br.ufac.cidadon.entidades;

import javax.persistence.*;

@Entity
@Table(name="agraves") // nomeia as tabelas do banco
@NamedQueries({
	@NamedQuery(name="Agrave.todos", query = "SELECT a FROM Agrave a")//querie nomeada para buscar todos cursos})
	//@NamedQuery(name="Agrave.todosPorTitulo", query = "SELECT a FROM Agrave a ORDER BY a.titulo"),
	//@NamedQuery(name="Agrave.tituloContendo",
	//query="SELECT a FROM Agrave a WHERE a.titulo LIKE :termo ORDER BY a.titulo")
	//@NamedQuery(name="Agrave.porGravidade", query="SELECT a FROM Agrave a WHERE a.agrave BETWEEN :min AND :max ORDER BY a.gravidade")
})
public class Agrave {
@Id
  private long identificador;

 // private String titulo;

  private String comentario;

  private int gravidade;
  
  
  	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="USUARIO_FK")
  	private Usuario usuario;
    @ManyToOne(cascade=CascadeType.ALL)
  	@JoinColumn(name="AGRAVE_FK")
  	private Problema problema;
    
    /*===========================================METODOS===========================*/
	public long getIdentificador() {
		return identificador;
	}
	public void setIdentificador(long identificador) {
		this.identificador = identificador;
	}
//	public String getTitulo() {
//		return titulo;
//	}
//	public void setTitulo(String titulo) {
//		this.titulo = titulo;
//	}
	public String getComentario() {
		return comentario;
	}
	public void setComentario(String comentario) {
		this.comentario = comentario;
	}
	public int getGravidade() {
		return gravidade;
	}
	public void setGravidade(int gravidade) {
		this.gravidade = gravidade;
	}
	public Usuario getUsuario() {
		return usuario;
	}
	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	public Problema getProblema() {
		return problema;
	}
	public void setAgrave(Agrave agrave) {
		this.problema = problema;
	}

}