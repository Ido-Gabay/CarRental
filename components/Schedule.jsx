import React from "react";

export function Schedule() {
  return (
    <div className="book-content__box">
      <h2>Book a Car</h2>
      <form className="box-form">
        <div className="box-form__group">
          <label htmlFor="carType">
            <i className="fa-solid fa-car"></i> Select Your Car Type <b>*</b>
          </label>
          <select id="carType">
            <option>Select your car type</option>
            <option value="Audi A1 S-Line">Audi A1 S-Line</option>
            <option value="VW Golf 6">VW Golf 6</option>
            <option value="Toyota Camry">Toyota Camry</option>
            <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
            <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
            <option value="VW Passat CC">VW Passat CC</option>
          </select>
        </div>
        <div className="box-form__group">
          <label htmlFor="pickupLocation">
            <i className="fa-solid fa-location-dot"></i> Pick-up <b>*</b>
          </label>
          <select id="pickupLocation">
            <option>Select pick-up location</option>
            <option>Belgrade</option>
            <option>Novi Sad</option>
            <option>Nis</option>
            <option>Kragujevac</option>
            <option>Subotica</option>
          </select>
        </div>
        <div className="box-form__group">
          <label htmlFor="dropoffLocation">
            <i className="fa-solid fa-location-dot"></i> Drop-off <b>*</b>
          </label>
          <select id="dropoffLocation">
            <option>Select drop-off location</option>
            <option>Novi Sad</option>
            <option>Belgrade</option>
            <option>Nis</option>
            <option>Kragujevac</option>
            <option>Subotica</option>
          </select>
        </div>
        <div className="box-form__group">
          <label htmlFor="picktime">
            <i className="fa-regular fa-calendar-days"></i> Pick-up <b>*</b>
          </label>
          <input id="picktime" type="date" value="" />
        </div>
        <div className="box-form__group">
          <label htmlFor="droptime">
            <i className="fa-regular fa-calendar-days"></i> Drop-off <b>*</b>
          </label>
          <input id="droptime" type="date" value="" />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
