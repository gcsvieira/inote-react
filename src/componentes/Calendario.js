import React, { Component } from "react";
import "./Calendario.css";

class Calendario extends Component {
  render() {
    return (
      <div className="component">
        <div className="calendar secondary">
          <div className="month prussian">
            <p className="arrow">🡐</p>
            <div className="date">
              <h1>Março</h1>
              <p>28 de Março de 2022</p>
            </div>
            <p className="arrow">🡒</p>
          </div>

          <div className="weekdays prussian">
            <div>Dom</div>
            <div>Seg</div>
            <div>Ter</div>
            <div>Qua</div>
            <div>Qui</div>
            <div>Sex</div>
            <div>Sáb</div>
          </div>

          <div className="days">
            <div className="prev-date">27</div>
            <div className="prev-date">28</div>

            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
            <div>13</div>
            <div>14</div>
            <div>15</div>
            <div>16</div>
            <div>17</div>
            <div>18</div>
            <div>19</div>
            <div>20</div>
            <div>21</div>
            <div>22</div>
            <div>23</div>
            <div>24</div>
            <div>25</div>
            <div>26</div>
            <div>27</div>
            <div className="today primary">28</div>
            <div>29</div>
            <div>30</div>
            <div>31</div>

            <div className="next-date">1</div>
            <div className="next-date">2</div>
            <div className="next-date">3</div>
            <div className="next-date">4</div>
            <div className="next-date">5</div>
            <div className="next-date">6</div>
            <div className="next-date">7</div>
            <div className="next-date">8</div>
            <div className="next-date">9</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calendario;
