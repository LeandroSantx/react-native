import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [listaCompras, setListaCompras] = useState([]);

  const adicionarItem = () => {
    if (nome && preco) {
      const novoItem = { nome, preco };
      setListaCompras([...listaCompras, novoItem]);
      setNome('');
      setPreco('');
    }
  };

  const excluirItem = (index) => {
    const novaListaCompras = [...listaCompras];
    novaListaCompras.splice(index, 1);
    setListaCompras(novaListaCompras);
  };

  const ItemLista = ({ item, index }) => (
    <View style={styles.itemLista}>
      <Text>{item.nome}</Text>
      <Text>R${item.preco}</Text>
      <TouchableOpacity style={styles.botaoExcluir} onPress={() => excluirItem(index)}>
        <Text style={styles.botaoExcluirTexto}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Compras</Text>
      <View style={styles.camposContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome do item"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Preço"
          value={preco}
          onChangeText={setPreco}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={styles.botao} onPress={adicionarItem}>
        <Text style={styles.botaoTexto}>Adicionar</Text>
      </TouchableOpacity>
      <View style={styles.listaContainer}>
        {listaCompras.map((item, index) => (
          <ItemLista key={index} item={item} index={index} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  camposContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 10
  },
  botao: {
    backgroundColor: '#007aff',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'stretch',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  listaContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20
  },
  itemLista: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10
  }
});
