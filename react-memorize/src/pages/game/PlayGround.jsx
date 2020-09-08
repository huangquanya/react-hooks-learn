import React from 'react'

export default function PlayGround(props) {
    const {setEnd} = props
    let arr = [1, 2, 3, 4, 5, 6, 7, 8]
    arr = arr.slice(0).concat(arr)
    console.log(arr)
    let now = [];
    const handleClick = () => {
        let double = []
        let res = 8;
        // console.log(e.target.classList[0])
        return (e) => {
            // console.log(e.target.classList)
            let el = e.target.parentNode
            if (el.classList.contains('invisible')) {
                console.log('相同节点', res)
            } else if (double.length === 0) {
                double.push(el)
                // console.log(e.target.parentNode)
                el.classList.add('rotate')
            } else if (double.length === 1) {
                double.push(el)
                el.classList.add('rotate')
                if (double[0] === double[1]) {
                    double.map(i => i.classList.remove('rotate'))
                    double = [];
                } else if (double[0].classList[0] === double[1].classList[0]) {
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            resolve(double.map(i => i.classList.add('invisible')))
                        }, 500);
                    })
                        .then(() => {
                            res--
                            double = []
                            if (res === 0) {
                                setEnd(true)
                            }
                        })
                } else {
                    new Promise((resolve, reject) => {

                        setTimeout(() => {
                            resolve(
                                double.map(i => i.classList.remove('rotate'))
                            )
                        }, 5000);
                    })
                        .then(() => {
                            double = [];
                        })
                }
            }
        }

    }
    return (
        <div className="game">
            <ul className="playground" onClick={handleClick()}>
                {arr.map((i) => {
                    let key = now.includes(i) ? i * 10 + i : i;
                    now.push(i)
                    return <li key={key} val={i} className={i + ` playground-carwrap`} >
                        <div className="front" style={{ 'backgroundColor': '#ffff33' }}></div>
                        <div className="oppsite" style={{ 'backgroundColor': `#${i + 'f' + i + 'f' + '33'} ` }}></div>
                    </li>
                }
                )}
            </ul>
        </div>

    )
}