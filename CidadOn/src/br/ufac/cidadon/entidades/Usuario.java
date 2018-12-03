package br.ufac.cidadon.entidades;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.*;
@Entity
@Table(name="usuarios") // nomeia as tabelas do banco
@NamedQueries({
	@NamedQuery(name="Usuario.todos", query = "SELECT u FROM Usuario u"),//querie nomeada para buscar todos cursos})
	@NamedQuery(name="Usuario.todosPorNome", query = "SELECT u FROM Usuario u ORDER BY u.nome"),
	@NamedQuery(name="Usuario.usrCpf", query="SELECT u FROM Usuario u WHERE u.cpf = :valorCpf"),
	@NamedQuery(name="Usuario.nomeContendo",
	query="SELECT u FROM Usuario u WHERE u.nome LIKE :termo ORDER BY u.nome")
})
public class Usuario {
	@Id
	private long identificador;

	private long cpf;

	private String nome;
	@Temporal(TemporalType.DATE)
	private java.util.Date dataNascimento;

	private String sobrenome;


	private String senha;

	private double latitudeResidencia;

	private double longitudeResidencia;

	private String email;

	  @OneToMany(mappedBy="usuario")
	  private List<Agrave> agraves = new ArrayList<Agrave>();
	  
	  @OneToMany(mappedBy="usuario")
	  
	  private List<Problema> problemas = new ArrayList<Problema>();
	
	  
	/*============================METODOS==============================================*/


	public long getCpf() {
		return cpf;
	}

	public void setCpf(long cpf) {
		this.cpf = cpf;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Date getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(Date dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public String getSobrenome() {
		return sobrenome;
	}

	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}

	public long getIdentificador() {
		return identificador;
	}

	public void setIdentificador(long identificador) {
		this.identificador = identificador;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public double getLatitudeResidencia() {
		return latitudeResidencia;
	}

	public void setLatitudeResidencia(double latitudeResidencia) {
		this.latitudeResidencia = latitudeResidencia;
	}

	public double getLongitudeResidencia() {
		return longitudeResidencia;
	}

	public void setLongitudeResidencia(double longitudeResidencia) {
		this.longitudeResidencia = longitudeResidencia;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

		public List<Agrave> getAgraves() {
			return agraves;
		}
	
		public void setAgraves(List<Agrave> agraves) {
			this.agraves = agraves;
		}
	
		public List<Problema> getProblemas() {
			return problemas;
		}
	
		public void setProblemas(List<Problema> problemas) {
			this.problemas = problemas;
		}

}