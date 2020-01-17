 <template>
<div>
    <h1> Ajoute des tags pour trouver un jeu </h1>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <h3> Genre </h3>
  <multiselect v-model="value" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" :options="genre" :close-on-select="false" :multiple="true" :taggable="true" ></multiselect>
  <br>
  <h3> Modes </h3>
  <multiselect v-model="value" tag-placeholder="Seul ou a plusieurs" placeholder="Seul ou a plusieurs" label="name" track-by="code" :options="options" :close-on-select="false" :multiple="true" :taggable="true" ></multiselect>
  <br>
  <h3> Année(s) </h3>
  <multiselect v-model="value" tag-placeholder="Seul ou a plusieurs" placeholder="Choisi une ou plusieurs années" label="name2" track-by="code2" :close-on-select="false" :options="année" :multiple="true" :taggable="true"></multiselect>
  <br>
  <h3> Tags </h3>
  <multiselect v-model="value" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" :close-on-select="false" :options="options" :multiple="true" :taggable="true"></multiselect>
  <br>
  <h3> Finition </h3>
  <multiselect v-model="value" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name1" track-by="code1" :close-on-select="false" :options="état" :multiple="true" :taggable="true"></multiselect>
</div>
</template>


<script>
import Multiselect from 'vue-multiselect'

export default {
  components: {
    Multiselect
  },
  data () {
    return {
      value: [],
      genre: [
        { name: 'Real Time Strategy (RTS)', code: 'RTS' },
        { name: 'First Person Shooter (FPS)', code: 'FPS' },
        { name: 'MOBA', code: 'MOBA' }
      ],
      value: [],
      options: [
        { name: 'Coop', code: 'Coop' },
        { name: 'Solo', code: 'So' },
        { name: 'Multiplayer', code: 'Multi' },
        { name: 'Split Screen', code: 'Split'}
      ],
      value: [],
      état: [
        { name1: 'Alpha', code1: 'A' },
        { name1: 'Beta', code1: 'B' },
        { name1: 'Fini', code1: 'Fin' }
      ],
      value: [],
      année: [
        { name2: '2000', code2: '4' },
        { name2: '2001', code2: '5' },
        { name2: '2002', code2: '6' },
        { name2: '2003', code2: '7' },
        { name2: '2004', code2: '8' },
        { name2: '2005', code2: '9' },
      ]
    }
  },
  methods: {}
} 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="vue-multiselect/dist/vue-multiselect.min.css"> 
</style>
