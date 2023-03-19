(() => {
  'use strict';
  function e() {
    const e = {},
      t = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
      ],
      o = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
      ],
      i = () => t;
    return {
      getShipDict: () => e,
      getGrid: i,
      getShotsGrid: () => o,
      placeShip: (o, i, n) => {
        if (!1 === ((e, t, o) => !(e.getLength() + o > 7))(o, 0, n)) return !1;
        const r = o.getLength();
        t[i].splice(n, r);
        for (let e = 0; e < r; e++) t[i].splice(n, 0, r);
        return (
          ((t) => {
            e[t.getLength()] = t;
          })(o),
          !0
        );
      },
      canReceiveAttack: (e, t) => 0 === o[e][t],
      receiveAttack: (t, n) => {
        let r = !1;
        return (
          0 !== i()[t][n]
            ? ((r = !0), e[i()[t][n]].hit())
            : 0 === i()[t][n] && (i()[t][n] = 'miss'),
          (o[t][n] = 1),
          r
        );
      },
      isAllSunk: () => {
        for (let t in e) if (!1 === e[t].isSunk()) return !1;
        return !0;
      },
    };
  }
  function t(e) {
    let t = 0;
    return {
      getLength: () => e,
      getTimesHit: () => t,
      hit: () => {
        t++;
      },
      isSunk: () => t >= e,
    };
  }
  const o = (function (o) {
    const i = e();
    return {
      getName: () => 'TestPlayer',
      getBoard: () => i,
      doAttack: (e, t, o) => {
        let i = !1;
        const n = e.getBoard();
        return (
          !0 === n.canReceiveAttack(t, o) && (n.receiveAttack(t, o), (i = !0)),
          i
        );
      },
      deployShip: (e, o, n) => i.placeShip(t(e), o, n),
    };
  })();
  o.deployShip(1, 0, 0),
    o.deployShip(2, 3, 1),
    o.deployShip(3, 1, 2),
    o.deployShip(4, 4, 2),
    o.deployShip(5, 6, 2),
    console.log(o.getBoard().getGrid());
  const i = (function () {
    const o = e();
    return {
      getBoard: () => o,
      doRandomAttack: (e) => {
        const t = e.getBoard();
        let o = !1;
        for (; !o; ) {
          const e = Math.floor(7 * Math.random()),
            i = Math.floor(7 * Math.random());
          !0 === t.canReceiveAttack(e, i) && (t.receiveAttack(e, i), (o = !0));
        }
        return o;
      },
      deployShip: (e, i, n) => o.placeShip(t(e), i, n),
    };
  })();
  i.deployShip(1, 0, 0),
    i.deployShip(2, 0, 1),
    i.deployShip(3, 0, 3),
    i.deployShip(4, 1, 0),
    i.deployShip(5, 6, 2),
    console.log(i.getBoard().getGrid());
})();
