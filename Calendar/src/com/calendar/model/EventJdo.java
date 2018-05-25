package com.calendar.model;

import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;

@PersistenceCapable
public class EventJdo {

	@Persistent
	String title;

	@Persistent
	int startDateLong;
	
	@Persistent
	long endDateLong;
	
	@Persistent
	int eventID;
	
	@Persistent
	String startDate; 
	
	@Persistent
	String endDate;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public int getStartDateLong() {
		return startDateLong;
	}

	public void setStartDateLong(int startDateLong) {
		this.startDateLong = startDateLong;
	}

	public long getEndDateLong() {
		return endDateLong;
	}

	public void setEndDateLong(long endDateLong) {
		this.endDateLong = endDateLong;
	}

	public int getEventID() {
		return eventID;
	}

	public void setEventID(int eventID) {
		this.eventID = eventID;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	
}
