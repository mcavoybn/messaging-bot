
const ADJECTIVES = `
bare
bent
big
blind
blue
bold
brave
bumpy
calm
clean
cold
crooked
curly
cute
dark
deaf
deep
dim
dirty
drab
drunk
dry
dull
dusty
eager
fancy
fast
fit
flat
fluffy
frail
free
fresh
grumpy
happy
hard
heavy
hot
huge
icy
itchy
jolly
juicy
lazy
long
loose
loud
loyal
molten
mushy
new
nice
noisy
old
pink
puny
pure
raspy
raw
real
red
rich
ripe
royal
rude
sad
salty
scary
sharp
shy
sick
silly
skinny
small
smart
soft
sour
stale
sticky
sweet
swift
tall
tame
tasty
tender
thick
thin
tight
tiny
tired
tough
vast
warm
wet
wide
wild
wise
witty
worn
yummy
`;

const NOUNS = `
badge
bar
beam
beard
beast
bench
bet
bite
blade
blast
brain
bun
cheer
chin
clone
cloud
clown
corn
couch
court
crane
crate
creek
crew
crown
den
ditch
drain
drone
feast
fee
fence
fin
flame
flood
fruit
gland
globe
glove
gnome
grade
grape
grin
groin
horn
hug
lip
lunch
mop
mouth
mug
nun
patch
peach
pen
phone
porch
prince
puck
quilt
ranch
rope
rug
scar
scope
shark
shell
shoe
shore
skate
skin
skull
slime
slope
sloth
snail
snake
sneeze
snout
spark
sport
spot
stain
stone
storm
stove
sword
thorn
throne
treat
troll
trout
tweet
twerp
vet
watch
wrench
wrist
yacht
zone
`;

const adjectives = ADJECTIVES.split(/\s+/).filter(x => !!x);
console.log(`${adjectives.length} authentication adjectives`);
const nouns = NOUNS.split(/\s+/).filter(x => !!x);
console.log(`${nouns.length} authentication nouns`);

function chooseFrom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

module.exports = {
    adjective: () => chooseFrom(adjectives),
    noun: () => chooseFrom(nouns)
};