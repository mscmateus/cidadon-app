package br.ufac.cidadon.entidades;


import javax.persistence.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
@Entity
@Table(name="problemas")
@NamedQueries({
	@NamedQuery(name="Problema.todos", query = "SELECT p FROM Problema p"),//querie nomeada para buscar todos cursos})
	//@NamedQuery(name="Problema.todosPorDescricao", query = "SELECT p FROM Problema p ORDER BY p.descricao"),
	@NamedQuery(name="Problema.porPeriodoCriacao", query="SELECT p FROM Problema p WHERE p.dataCriacao BETWEEN :min AND :max ORDER BY p.dataCriacao"),
	@NamedQuery(name="Problema.porDataCriacao", query="SELECT p FROM Problema p WHERE p.dataCriacao = :dataCriacao ORDER BY p.dataCriacao"),
	@NamedQuery(name="Problema.todosResolvidos", query="SELECT p FROM Problema p WHERE p.resolvido = true ORDER BY p.dataCriacao"),
	@NamedQuery(name="Problema.todosNaoResolvidos", query="SELECT p FROM Problema p WHERE p.resolvido = false ORDER BY p.dataCriacao")
})
public class Problema {
	@Id
  private long identificador;

  private String descricao;
  @Temporal(TemporalType.DATE)
  private Date dataCriacao;

  private double latitude;

  private double longitude;

  private boolean resolvido;
  
  
  
  @OneToMany(mappedBy="problema")
  private List<Denuncia> denuncias = new ArrayList<Denuncia>();
  @ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="USUARIO_FK")
	private Usuario usuario;
  /*=====================================**/
  @OneToMany(mappedBy="problema")
  private List<Agrave> agraves = new ArrayList<Agrave>();
  /*===========================================*/
  @ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="TIPO_PROBLEMA_FK")
	private TipoDeProblema tipoDeProblema;
  
  /*========================================METODOS==============================*/
public long getIdentificador() {
	return identificador;
}
public void setIdentificador(long identificador) {
	this.identificador = identificador;
}
public String getDescricao() {
	return descricao;
}
public void setDescricao(String descricao) {
	this.descricao = descricao;
}
public Date getDataCriacao() {
	return dataCriacao;
}
public void setDataCriacao(Date dataCriacao) {
	this.dataCriacao = dataCriacao;
}
public double getLatitude() {
	return latitude;
}
public void setLatitude(double latitude) {
	this.latitude = latitude;
}
public double getLongitude() {
	return longitude;
}
public void setLongitude(double longitude) {
	this.longitude = longitude;
}
public boolean isResolvido() {
	return resolvido;
}
public void setResolvido(boolean resolvido) {
	this.resolvido = resolvido;
}
public List<Denuncia> getDenuncias() {
	return denuncias;
}
public void setDenuncias(List<Denuncia> denuncias) {
	this.denuncias = denuncias;
}
public Usuario getUsuario() {
	return usuario;
}
public void setUsuario(Usuario usuario) {
	this.usuario = usuario;
}
public List<Agrave> getAgraves() {
	return agraves;
}
public void setAgraves(List<Agrave> agraves) {
	this.agraves = agraves;
}
public TipoDeProblema getTipoDeProblema() {
	return tipoDeProblema;
}
public void setTipoDeProblema(TipoDeProblema tipoDeProblema) {
	this.tipoDeProblema = tipoDeProblema;
}
     
}