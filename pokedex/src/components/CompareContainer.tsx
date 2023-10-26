import React from 'react'
import { pokemonStatType, pokemonTypeInterface, userPokemonsType } from '../utils/Types';
import { FaPlus } from 'react-icons/fa';
import { pokemonTypes } from '../utils/getPokemonTypes';


function CompareContainer({
    pokemon = undefined,
    isEmpty = false,
}: {
    pokemon?: userPokemonsType;
    isEmpty?: boolean;
}) {

    const createStatsArray = (
        types: pokemonTypeInterface[],
        statType: pokemonStatType
    ) => {
        const statsArray: { name: string; image: string }[] = [];
        const statsSet = new Set<string>();
        types.forEach((type: pokemonTypeInterface) => {
            const key = Object.keys(type)[0];
            type[key][statType].forEach((stat: string) => {
                if (!statsSet.has(stat)) {
                    // @ts-ignore
                    statsArray.push({ name: stat, image: pokemonTypes[stat].image });
                    statsSet.add(stat);
                }
            });
        });
        return statsArray;
    };

    const getStats = () => {

        return (<>

            <div className="pokemon-types">
                <h4 className='pokemon-types-title'>Strength</h4>
                <div className="pokemon-types-icons">
                    {createStatsArray(pokemon?.types!, "strength").map(
                        (stat: { image: string }) => (
                            <div className="pokemon-type">
                                <img 
                                src="{stat.image}" 
                                alt="pokemon type" 
                                className='pokemon-type-image'
                                />
                            </div>
                        )
                    )}                
                </div>
            </div>

            <div className="pokemon-types">
                <h4 className='pokemon-types-title'>Weakness</h4>
                <div className="pokemon-types-icons">
                    {createStatsArray(pokemon?.types!, "weakness").map(
                        (stat: { image: string }) => (
                            <div className="pokemon-type">
                                <img 
                                src="{stat.image}" 
                                alt="pokemon type" 
                                className='pokemon-type-image'
                                />
                            </div>
                        )
                    )}                
                </div>
            </div>

            <div className="pokemon-types">
                <h4 className='pokemon-types-title'>Vulnerable</h4>
                <div className="pokemon-types-icons">
                    {createStatsArray(pokemon?.types!, "vulnerable").map(
                        (stat: { image: string }) => (
                            <div className="pokemon-type">
                                <img 
                                src="{stat.image}" 
                                alt="pokemon type" 
                                className='pokemon-type-image'
                                />
                            </div>
                        )
                    )}                
                </div>
            </div>

            <div className="pokemon-types">
                <h4 className='pokemon-types-title'>Resistance</h4>
                <div className="pokemon-types-icons">
                    {createStatsArray(pokemon?.types!, "resistance").map(
                        (stat: { image: string }) => (
                            <div className="pokemon-type">
                                <img 
                                src="{stat.image}" 
                                alt="pokemon type" 
                                className='pokemon-type-image'
                                />
                            </div>
                        )
                    )}                
                </div>
            </div>

        </>);
    };
    return (
        <div className='compare-container'>
            {isEmpty && (
                <div className="empty">
                    <button>
                        <FaPlus />
                    </button>
                    <h3>Add Pokemon to Comparaison</h3>
                </div>
            )}
            {pokemon && (
                <div className="compare-element">
                    <div className="compare-info">
                        <div className="compare-details">
                            <h3>{pokemon?.name}</h3>
                            <img
                                src={pokemon?.image}
                                alt="pokemon"
                                className='compare-image'
                            />
                        </div>
                        <div className="pokemon-types-container">
                            <div className="pokemon-types">
                                <h4 className='pokemon-types-title'>Type</h4>
                                <div className="pokemon-type-icons">
                                    {pokemon?.types.map((type: pokemonTypeInterface) => {
                                        const keys = Object.keys(type);
                                        return (
                                            <div className="pokemon-type">
                                                <img src={type[keys[0]].image}
                                                    alt="pokemon type"
                                                    className='pokemon-type-image' />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            {getStats()}
                        </div>
                    </div>
                    <div className="compare-action-buttons">
                        <button className='compare-btn'>Add</button>
                        <button className='compare-btn'>View</button>
                        <button className='compare-btn'>Remove</button>
                    </div>
                </div>
            )
            }
        </div>
    );
}

export default CompareContainer;