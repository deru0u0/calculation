'use strict';
{
    class Calc {
        constructor(title){
            this.title = title;
            this.result = 0;
            this.ol = document.querySelector('ol');
            this.leftHandSide = 0;
            this.rightHandSide = 0;

        
        }
        renderTitle() {
            let p = document.querySelector('p');
            p.textContent = this.title;
        }
        getRandomLeftHandSide() {
            return Math.floor(Math.random()*100);
        }
        getRandomRightHandSide() {
            return Math.floor(Math.random()*100);
        }
        showQuestion() {
            this.leftHandSide = this.getRandomLeftHandSide();
            this.rightHandSide = this.getRandomRightHandSide();

            const div = document.createElement('div');
            div.classList.add('issue-area');

            const li = document.createElement('li');
            li.classList.add('issue');
            li.textContent = `${this.leftHandSide} + ${this.rightHandSide} = `;

            const button = document.createElement('div');
            button.classList.add('result-buttom');
            button.textContent = '答えを見る';

            const span = document.createElement('span');
            span.classList.add('result');
            this.result = this.leftHandSide + this.rightHandSide;
            span.textContent = this.result;

            this.ol.appendChild(div);
            div.appendChild(li);
            div.appendChild(button);
            div.appendChild(span);

            button.addEventListener('click', function(e) {
                if ( this.classList.contains('inactive')) {
                    return;
                }
                left--;
                span.classList.add('active');
                this.classList.add('inactive');
                if ( left === 0 ) {
                    this.resetArea = document.querySelector('.reset-area');
                    this.resetArea.classList.remove('inactive');
                }
            },false);

        }
        reset() {
            const resetArea = document.querySelector('.reset-area');
            let resetButton = document.createElement('div');
            resetArea.appendChild(resetButton);
            resetButton.textContent = 'もう一度計算する';
            resetArea.classList.add('inactive');
            resetButton.addEventListener('click', function() {
                if ( resetArea.classList.contains('inactive')) {
                    return;
                }
                location.reload();
            },false);
            
        }
    }

    let calculation = new Calc('Calculation');
    calculation.renderTitle();
    calculation.reset();
    let left = 10;

    for ( let i = 0; i < 10; i++ ) {
        calculation.showQuestion();
    }
    

}