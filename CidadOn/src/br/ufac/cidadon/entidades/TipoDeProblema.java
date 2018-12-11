package br.ufac.cidadon.entidades;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

import java.awt.Image;
@Entity
@Table(name="tiposDeProblemas")
@NamedQueries({
	@NamedQuery(name="TipoDeProblema.todos", query = "SELECT p FROM Problema p"),//querie nomeada para buscar todos cursos})
	@NamedQuery(name="TipoDeProblema.todosPorTitulo", query = "SELECT t FROM TipoDeProblema t ORDER BY t.titulo"),
	@NamedQuery(name="TipoDeProblema.porMesesVisibilidade", query="SELECT t FROM TipoDeProblema t ORDER BY t.mesesVisibilidade "),
	@NamedQuery(name="TipoDeProblema.tituloContendo", query="SELECT t FROM TipoDeProblema t WHERE t.titulo LIKE :termo ORDER BY t.titulo")
})
public class TipoDeProblema {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
  private int indentificador;

  private String titulo;

  private String descricao;

  private int mesesVisibilidade;
  @Lob
  private Image icone;
  @OneToMany(mappedBy="tipoDeProblema")
  private List<Problema> problemas = new ArrayList<Problema>();
  
  /*====================METODOS=================*/
public int getIndentificador() {
	return indentificador;
}
public void setIndentificador(int indentificador) {
	this.indentificador = indentificador;
}
public String getTitulo() {
	return titulo;
}
public void setTitulo(String titulo) {
	this.titulo = titulo;
}
public String getDescricao() {
	return descricao;
}
public void setDescricao(String descricao) {
	this.descricao = descricao;
}
public int getMesesVisibilidade() {
	return mesesVisibilidade;
}
public void setMesesVisibilidade(int mesesVisibilidade) {
	this.mesesVisibilidade = mesesVisibilidade;
}
public Image getIcone() {
	return icone;
}
public void setIcone(Image icone) {
	this.icone = icone;
}
public List<Problema> getProblemas() {
	return problemas;
}
public void setProblemas(List<Problema> Problemas) {
	this.problemas = Problemas;
}

}