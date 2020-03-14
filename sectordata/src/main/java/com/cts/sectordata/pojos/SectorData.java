package com.cts.sectordata.pojos;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="sectordata")
public class SectorData {
	@Id
	Integer id;
	String sectorName;
	String brief;
	@Override
	public String toString() {
		return "SectorData [id=" + id + ", sectorName=" + sectorName + ", brief=" + brief + "]";
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getSectorName() {
		return sectorName;
	}
	public void setSectorName(String sectorName) {
		this.sectorName = sectorName;
	}
	public String getBrief() {
		return brief;
	}
	public void setBrief(String brief) {
		this.brief = brief;
	}
	
	
}
