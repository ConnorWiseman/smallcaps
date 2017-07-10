const flipTable = {
  a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ғ', g: 'ɢ',
  h: 'ʜ', i: 'ɪ', j: 'ᴊ', k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ',
  o: 'ᴏ', p: 'ᴘ', q: 'ǫ', r: 'ʀ', s: 's', t: 'ᴛ', u: 'ᴜ',
  v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ'
}; // ꜰ


function flip(e) {
  var length = this.value.length,
      result = new Array(length);

  for (var i = 0; i < length; i++) {
    var c = this.value.charAt(i),
        r = flipTable[c];

    result[i] = r != undefined ? r: c;
  }

  output.value = result.join('');
};


document.addEventListener('DOMContentLoaded', function(e) {
  var input  = document.getElementById('input'),
      output = document.getElementById('output');

  input.addEventListener('keyup', flip);
  flip.apply(input);
});
