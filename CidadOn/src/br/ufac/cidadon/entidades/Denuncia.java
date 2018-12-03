package br.ufac.cidadon.entidades;



import javax.persistence.*;

@Entity
@Table(name="denuncias") // nomeia as tabelas do banco
@NamedQueries({
	@NamedQuery(name="Denuncia.todos", query = "SELECT d FROM Denuncia d"),//querie nomeada para buscar todos cursos})
	@NamedQuery(name="Denuncia.todosPorTipo", query = "SELECT d FROM Denuncia d ORDER BY d.tipo"),
	@NamedQuery(name="Denuncia.tipoContendo",
	query="SELECT d FROM Denuncia d WHERE d.tipo LIKE :termo ORDER BY d.tipo")
})
public class Denuncia {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private long identificador;
	private String tipo;
    private String descricao;
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="PROBLEMA_FK")
	private Problema problema;
	
	/*==============================METODOS===========================================*/
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
	public Problema getProblema() {
		return problema;
	}
	public void setProblema(Problema problema) {
		this.problema = problema;
	}
	public String getTipo() {
		return tipo;
	}
	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

}