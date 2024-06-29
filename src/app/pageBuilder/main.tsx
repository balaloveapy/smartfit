'use client'
import Image from "next/image"
import * as styled from "./main.styled"
import { useState } from "react"
import axios from "axios"
import { valores } from "./buttonClick"
export function Main() {
    const imgVal = [{ required: '/required-mask.png', namem: 'Obrigatorio', namer: 'Recomendado', recommended: '/recommended-mask.png', name: 'Máscara' }, { required: '/required-towel.png', namem: 'Obrigatorio', namer: 'Recomendado', recommended: '/recommended-towel.png', name: 'Toalha' }, { required: '/partial-fountain.png', namem: 'Parcial', namer: 'Proibido', recommended: '/forbidden-fountain.png', name: 'Bebedouro' }, { required: '/required-lockerroom.png', namem: 'Liberado', namer: 'Parcial', namec: 'fechado', close: '/partial-lockerroom.png', recommended: '/forbidden-lockerroom.png', name: 'Vestirário' }]
    const [store, setStore] = useState<valores[]>([])
    const [reference, setReference] = useState([{ value: true, number: 0, time: 6 }, { value: false, number: 1, time: 12 }, { value: false, number: 2, time: 18 },])
    const [exibir, setexibir] = useState(false)
    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        const newRef = [...reference]
        for (let i in newRef) {
            if (newRef[i].number === +event.target.value) {
                console.log(newRef[+event.target.value].number)
                newRef[+event.target.value].value = !newRef[+event.target.value].value
            }
            else {
                newRef[i].value = false
            }
        }
        setReference(newRef)

    };
    async function valueYellow(a: any) {
        a.preventDefault()
        const valor = await axios.get('https://test-frontend-developer.s3.amazonaws.com/data/locations.json')
        const valorReceb = valor.data.locations

        console.log(valorReceb)
        if (!exibir) {
            const valores = valorReceb.filter((a: any) => a.opened === true)
            console.log('ola:',valores)
            return setStore(valores)
        }
        setStore(valorReceb)


    }
    function p(a: string) {

        return <div dangerouslySetInnerHTML={{ __html: a }} />;

    }
    return (
        <styled.Main>
            <div>
                <div className="Reabertura">
                    <h1>Reabertura</h1>
                    <h1>smart fit</h1>
                </div>
                <div className="horario">
                    <p>O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.</p>
                </div>
            </div>
            <div className="horas">
                <div className="relogio">
                    <Image src={'/icon-hour.png'} width={40} height={40} alt="relogio" />
                    <p>Horário</p>
                </div>
                <div className="chooseTime">
                    <div className="periodo">
                        Qual período quer treinar?
                    </div>
                    <div>
                        <form className="inputFather">
                            <label>
                                <div>
                                    <input onChange={handleCheck} checked={reference[0].value} type="checkbox" value={'0'} />
                                    Manhã
                                </div>
                                <div className="timeOpen">
                                    <p>06:00 ás 12:00</p>
                                </div>
                            </label>
                            <label>
                                <div>
                                    <input onChange={handleCheck} checked={reference[1].value} type="checkbox" value={'1'} />
                                    Tarde
                                </div>
                                <div className="timeOpen">
                                    <p>12:01 ás 18:00</p>
                                </div>
                            </label>

                            <label>
                                <div>
                                    <input onChange={handleCheck} checked={reference[2].value} type="checkbox" value={'2'} />
                                    Noite
                                </div>
                                <div className="timeOpen">
                                    <p>18:01 ás 23:00</p>
                                </div>
                            </label>
                            <div className="chooseOpen">
                                <label>
                                    <div>
                                        <input onChange={() => setexibir(!exibir)} checked={exibir} type="checkbox" value={'3'} />
                                        Exibir unidades fechadas
                                    </div>
                                    <div>
                                        Resultados encontrados: <span>{store.length}</span>
                                    </div>
                                </label>
                            </div>
                            <div className="button">
                                <button onClick={valueYellow} className="yellow">Encontrar Unidade</button>
                                <button className="white">Limprar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <div className={`flex justify-between my-7 rounded-sm p-4`} style={{ background: '#f5f5f5' }}>
                    {
                        imgVal.map((a) => (
                            <div className="flex flex-col items-center">
                                <div>
                                    <p>{a.name}</p>
                                </div>
                                <div className="flex items-center text-xs gap-14">
                                    <div className="flex flex-col justify-center items-center">
                                        <Image src={a.required} width={50} height={50} alt={a.name} />
                                        {a.namem}
                                    </div>
                                    {a.close != undefined && a.namec && (
                                        <div className="flex items-center justify-center flex-col">
                                            <Image src={a.close} width={50} height={50} alt={a.name} />
                                            {a.namec}
                                        </div>
                                    )
                                    }
                                    <div className="flex items-center justify-center flex-col">
                                        <Image src={a.recommended} width={50} height={50} alt={a.name} />
                                        {a.namer}
                                    </div>
                                </div>


                                <div>

                                </div>
                            </div>
                        ))
                    }
                </div>
                {store.length > 0 &&
                    <div className="divInfo">
                        {
                            store?.map((a, b) => (
                                <div className="divChildren">
                                    <div>
                                        <div>
                                            {a.opened && <p style={{ color: '#40c344' }}>aberto</p>}
                                            {!a.opened && <p style={{ color: '#de1f2b' }}>fechado</p>}
                                        </div>
                                        <div className="border-b-2 py-4">
                                            <h2 className="text-2xl">{a.title}</h2>
                                            {p(a.content)}
                                        </div>
                                        <div>
                                            <div className="flex py-3">
                                                {

                                                    imgVal.map((c) => (
                                                        <Image src={c[a.mask]} width={80} height={80} alt="" />
                                                    ))
                                                }
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                                {a.schedules && a.schedules.map((g) => (
                                                    <div>
                                                        <h2 className="font-bold">{g.weekdays}</h2>
                                                        <p>{g.hour}</p>
                                                    </div>

                                                ))}
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            ))
                        }

                    </div>

                }
            </div>
        </styled.Main>
    )
}