import { useCallback, useEffect, useRef, useState } from "react"

const App = () => {
  let [val, setval] = useState(8)
  let [on, seton] = useState(false)
  let [ans, setans] = useState("")
  let [copied, setCopied] = useState(false)

  const kalu = () => {
    seton((prev) => !prev)
  }

  function abcd() {
    let password = ""
    let str = "ABCDEFGHIJKLOMNOPQRSTUVWXYZabcdefghijklomnopqrstuvwxyz"
    if (on) {
      str += "0123456789"
    }
    for (let i = 0; i <= val; i++) {
      let lalu = Math.floor(Math.random() * str.length)
      let aloo = str.charAt(lalu)
      password += aloo
    }
    setans(password)
  }

  useEffect(() => {
    abcd()
  }, [val, on])

  const monu = (e) => {
    setval(e.target.value)
  }

  const chor = useRef(null)
  let bhalu = useCallback(() => {
    chor.current.select()
    window.navigator.clipboard.writeText(ans)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }, [ans])

  const strength = val < 10 ? "Weak" : val < 20 ? "Medium" : val < 40 ? "Strong" : "Unbreakable"
  const strengthColor = val < 10 ? "#ff4444" : val < 20 ? "#ffaa00" : val < 40 ? "#44ff88" : "#00ffff"

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #080c10;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Share Tech Mono', monospace;
          overflow: hidden;
        }

        .bg-grid {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,255,200,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,200,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
          z-index: 0;
        }

        .bg-glow {
          position: fixed;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(0,255,180,0.07) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 0;
          animation: pulse 4s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
        }

        .card {
          position: relative;
          z-index: 1;
          background: rgba(8, 16, 20, 0.92);
          border: 1px solid rgba(0, 255, 180, 0.25);
          border-radius: 4px;
          padding: 48px 44px;
          width: 480px;
          box-shadow:
            0 0 0 1px rgba(0,255,180,0.08),
            0 0 60px rgba(0,255,180,0.08),
            inset 0 0 40px rgba(0,0,0,0.6);
        }

        .card::before {
          content: '';
          position: absolute;
          top: -1px; left: 20px; right: 20px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #00ffb4, transparent);
          border-radius: 2px;
        }

        .title {
          font-family: 'Orbitron', sans-serif;
          font-weight: 900;
          font-size: 11px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: rgba(0, 255, 180, 0.5);
          margin-bottom: 6px;
        }

        .headline {
          font-family: 'Orbitron', sans-serif;
          font-size: 26px;
          font-weight: 700;
          color: #e8fff8;
          letter-spacing: 0.05em;
          margin-bottom: 36px;
          text-shadow: 0 0 30px rgba(0,255,180,0.3);
        }

        .output-row {
          display: flex;
          gap: 10px;
          margin-bottom: 32px;
        }

        .password-input {
          flex: 1;
          background: rgba(0, 255, 180, 0.04);
          border: 1px solid rgba(0, 255, 180, 0.2);
          border-radius: 3px;
          padding: 14px 18px;
          font-family: 'Share Tech Mono', monospace;
          font-size: 15px;
          color: #00ffb4;
          letter-spacing: 0.12em;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          text-shadow: 0 0 10px rgba(0,255,180,0.4);
        }

        .password-input:focus {
          border-color: rgba(0, 255, 180, 0.5);
          box-shadow: 0 0 20px rgba(0,255,180,0.1);
        }

        .copy-btn {
          background: transparent;
          border: 1px solid rgba(0,255,180,0.35);
          border-radius: 3px;
          padding: 14px 20px;
          color: #00ffb4;
          font-family: 'Orbitron', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.15em;
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
          overflow: hidden;
          white-space: nowrap;
        }

        .copy-btn:hover {
          background: rgba(0,255,180,0.1);
          border-color: #00ffb4;
          box-shadow: 0 0 20px rgba(0,255,180,0.2);
        }

        .copy-btn.copied {
          border-color: #44ff88;
          color: #44ff88;
          background: rgba(68, 255, 136, 0.08);
        }

        .controls {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .control-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .control-label {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .label-text {
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(200,230,220,0.5);
        }

        .label-value {
          font-family: 'Orbitron', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #00ffb4;
        }

        .range-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 3px;
          background: linear-gradient(
            to right,
            #00ffb4 0%,
            #00ffb4 calc((${0} - 4) / 96 * 100%),
            rgba(0,255,180,0.15) calc((${0} - 4) / 96 * 100%),
            rgba(0,255,180,0.15) 100%
          );
          border-radius: 2px;
          outline: none;
          cursor: pointer;
        }

        .range-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          background: #080c10;
          border: 2px solid #00ffb4;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 12px rgba(0,255,180,0.5);
          transition: box-shadow 0.2s;
        }

        .range-slider::-webkit-slider-thumb:hover {
          box-shadow: 0 0 20px rgba(0,255,180,0.8);
        }

        .strength-bar {
          height: 3px;
          border-radius: 2px;
          background: rgba(255,255,255,0.06);
          overflow: hidden;
          margin-top: 2px;
        }

        .strength-fill {
          height: 100%;
          border-radius: 2px;
          transition: width 0.4s ease, background 0.4s ease;
        }

        .toggle-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          background: rgba(0,255,180,0.03);
          border: 1px solid rgba(0,255,180,0.12);
          border-radius: 3px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .toggle-row:hover {
          background: rgba(0,255,180,0.06);
          border-color: rgba(0,255,180,0.25);
        }

        .toggle-label {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(200,230,220,0.6);
        }

        .toggle-switch {
          width: 40px;
          height: 22px;
          background: rgba(0,255,180,0.1);
          border: 1px solid rgba(0,255,180,0.3);
          border-radius: 11px;
          position: relative;
          transition: all 0.3s;
        }

        .toggle-switch.active {
          background: rgba(0,255,180,0.25);
          border-color: #00ffb4;
          box-shadow: 0 0 12px rgba(0,255,180,0.3);
        }

        .toggle-knob {
          position: absolute;
          top: 3px;
          left: 3px;
          width: 14px;
          height: 14px;
          background: rgba(0,255,180,0.5);
          border-radius: 50%;
          transition: all 0.3s;
        }

        .toggle-switch.active .toggle-knob {
          left: 21px;
          background: #00ffb4;
          box-shadow: 0 0 8px rgba(0,255,180,0.8);
        }

        .regen-btn {
          width: 100%;
          margin-top: 8px;
          background: transparent;
          border: 1px solid rgba(0,255,180,0.25);
          border-radius: 3px;
          padding: 14px;
          font-family: 'Orbitron', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(0,255,180,0.6);
          cursor: pointer;
          transition: all 0.2s;
        }

        .regen-btn:hover {
          background: rgba(0,255,180,0.06);
          border-color: rgba(0,255,180,0.5);
          color: #00ffb4;
          box-shadow: 0 0 20px rgba(0,255,180,0.1);
        }

        .footer-text {
          margin-top: 28px;
          font-size: 10px;
          letter-spacing: 0.15em;
          color: rgba(0,255,180,0.2);
          text-align: center;
        }
      `}</style>

      <div className="bg-grid" />
      <div className="bg-glow" />

      <div className="card">
        <div className="title">Security Tool v2.0</div>
        <div className="headline">PASS_GEN</div>

        <div className="output-row">
          <input
            className="password-input"
            type="text"
            value={ans}
            ref={chor}
            readOnly
          />
          <button className={`copy-btn${copied ? " copied" : ""}`} onClick={bhalu}>
            {copied ? "✓ COPIED" : "COPY"}
          </button>
        </div>

        <div className="controls">
          <div className="control-group">
            <div className="control-label">
              <span className="label-text">Length</span>
              <span className="label-value">{val} chars</span>
            </div>
            <input
              className="range-slider"
              type="range"
              max={100}
              min={4}
              value={val}
              onChange={monu}
              style={{
                background: `linear-gradient(to right, #00ffb4 0%, #00ffb4 ${(val - 4) / 96 * 100}%, rgba(0,255,180,0.15) ${(val - 4) / 96 * 100}%, rgba(0,255,180,0.15) 100%)`
              }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: strengthColor, transition: "color 0.3s" }}>
                ▶ {strength}
              </span>
              <div className="strength-bar" style={{ width: "200px" }}>
                <div
                  className="strength-fill"
                  style={{
                    width: `${Math.min((val / 100) * 100, 100)}%`,
                    background: strengthColor,
                    boxShadow: `0 0 8px ${strengthColor}`
                  }}
                />
              </div>
            </div>
          </div>

          <div className="toggle-row" onClick={kalu}>
            <span className="toggle-label">Include Numbers</span>
            <div className={`toggle-switch${on ? " active" : ""}`}>
              <div className="toggle-knob" />
            </div>
          </div>

          <button className="regen-btn" onClick={abcd}>
            ↻ &nbsp; Regenerate
          </button>
        </div>

        <div className="footer-text">// CRYPTOGRAPHICALLY RANDOM • NEVER STORED</div>
      </div>
    </>
  )
}

export default App