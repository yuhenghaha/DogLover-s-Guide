const answers = [
    { 'answer': '1-A, 2-A, 3-A, 4-A', 'dog': 'Miniature Poodle,Cocker Spaniel,French Bulldog' },
    { 'answer': '1-A, 2-A, 3-A, 4-B', 'dog': 'Standard Poodle,English Springer Spaniel,Brittany' },
    { 'answer': '1-A, 2-A, 3-A, 4-C', 'dog': 'Australian Shepherd,Golden Retriever,German Shepherd' },
    { 'answer': '1-A, 2-A, 3-B, 4-A', 'dog': 'Boston Terrier,Cavalier King Charles Spaniel,Tibetan Terrier' },
    { 'answer': '1-A, 2-A, 3-B, 4-B', 'dog': 'Boxer,Vizsla,English Setter' },
    { 'answer': '1-A, 2-A, 3-B, 4-C', 'dog': 'Labrador Retriever,Weimaraner,Rhodesian Ridgeback' },
    { 'answer': '1-A, 2-A, 3-C, 4-A', 'dog': 'Chihuahua,Pug,Dachshund' },
    { 'answer': '1-A, 2-A, 3-C, 4-B', 'dog': 'Basset Hound,American Staffordshire Terrier,Beagle' },
    { 'answer': '1-A, 2-A, 3-C, 4-C', 'dog': 'Great Dane,Mastiff,Saint Bernard' },
    { 'answer': '1-A, 2-B, 3-A, 4-A', 'dog': 'Shih Tzu,Lhasa Apso,Maltese' },
    { 'answer': '1-A, 2-B, 3-A, 4-B', 'dog': 'Australian Cattle Dog,Border Collie,Welsh Springer Spaniel' },
    { 'answer': '1-A, 2-B, 3-A, 4-C', 'dog': 'Bernese Mountain Dog,Collie,Alaskan Malamute' },
    { 'answer': '1-A, 2-B, 3-B, 4-A', 'dog': 'Pekingese,Miniature Pinscher,Japanese Chin' },
    { 'answer': '1-A, 2-B, 3-B, 4-B', 'dog': 'Staffordshire Bull Terrier,Bulldog,Shar Pei' },
    { 'answer': '1-A, 2-B, 3-B, 4-C', 'dog': 'Newfoundland,Siberian Husky,Akita' },
    { 'answer': '1-A, 2-B, 3-C, 4-A', 'dog': 'Italian Greyhound,Toy Fox Terrier,Miniature Schnauzer' },
    { 'answer': '1-A, 2-B, 3-C, 4-B', 'dog': 'Whippet,Scottish Terrier,Airedale Terrier' },
    { 'answer': '1-A, 2-B, 3-C, 4-C', 'dog': 'Rottweiler,Doberman Pinscher,Bloodhound' },
    { 'answer': '1-A, 2-C, 3-A, 4-A', 'dog': 'Yorkshire Terrier,Toy Poodle,Pomeranian' },
    { 'answer': '1-A, 2-C, 3-A, 4-B', 'dog': 'Bichon Frise,Tibetan Spaniel,King Charles Spaniel' },
    { 'answer': '1-A, 2-C, 3-A, 4-C', 'dog': 'Old English Sheepdog,Samoyed,Chow Chow' },
    { 'answer': '1-A, 2-C, 3-B, 4-A', 'dog': 'Havanese,Papillon,Griffon Bruxellois' },
    { 'answer': '1-A, 2-C, 3-B, 4-B', 'dog': 'Finnish Spitz,Keeshond,Norwegian Elkhound' },
    { 'answer': '1-A, 2-C, 3-B, 4-C', 'dog': 'Greyhound,Afghan Hound,Irish Wolfhound' },
    { 'answer': '1-A, 2-C, 3-C, 4-A', 'dog': 'Chinese Crested,Rat Terrier,Manchester Terrier' },
    { 'answer': '1-A, 2-C, 3-C, 4-B', 'dog': 'Basenji,Saluki,Smooth Fox Terrier' },
    { 'answer': '1-A, 2-C, 3-C, 4-C', 'dog': 'Bullmastiff,Leonberger,Irish Setter' },
    { 'answer': '1-B, 2-A, 3-A, 4-A', 'dog': 'Bolognese,Affenpinscher,Brussels Griffon' },
    { 'answer': '1-B, 2-A, 3-A, 4-B', 'dog': 'American Water Spaniel,Clumber Spaniel,English Cocker Spaniel' },
    { 'answer': '1-B, 2-A, 3-A, 4-C', 'dog': 'Portuguese Water Dog,Flat-Coated Retriever,Nova Scotia Duck Tolling Retriever' },
    { 'answer': '1-B, 2-A, 3-B, 4-A', 'dog': 'Silky Terrier,West Highland White Terrier,Cairn Terrier' },
    { 'answer': '1-B, 2-A, 3-B, 4-B', 'dog': 'American Eskimo Dog,Shetland Sheepdog,English Bulldog' },
    { 'answer': '1-B, 2-A, 3-B, 4-C', 'dog': 'Belgian Malinois,German Shorthaired Pointer,Dalmatian' },
    { 'answer': '1-B, 2-A, 3-C, 4-A', 'dog': 'Schipperke,Norfolk Terrier,Miniature Dachshund' },
    { 'answer': '1-B, 2-A, 3-C, 4-B', 'dog': 'Australian Terrier,Welsh Terrier,Lakeland Terrier' },
    { 'answer': '1-B, 2-A, 3-C, 4-C', 'dog': 'Pointer,Hungarian Vizsla,Irish Water Spaniel' },
    { 'answer': '1-B, 2-B, 3-A, 4-A', 'dog': 'Tibetan Terrier,Pekingese,Lhasa Apso' },
    { 'answer': '1-B, 2-B, 3-A, 4-B', 'dog': 'Cocker Spaniel,Brittany Spaniel,Field Spaniel' },
    { 'answer': '1-B, 2-B, 3-A, 4-C', 'dog': 'English Springer Spaniel,Gordon Setter,Field Irish Setter' },
    { 'answer': '1-B, 2-B, 3-B, 4-A', 'dog': 'French Bulldog,Pugr,Boston Terrier' },
    { 'answer': '1-B, 2-B, 3-B, 4-B', 'dog': 'Bulldog,Beagle,Basset Hound' },
    { 'answer': '1-B, 2-B, 3-B, 4-C', 'dog': 'Labrador Retriever,Golden Retriever,Weimaraner' },
    { 'answer': '1-B, 2-B, 3-C, 4-A', 'dog': 'Chihuahua,Toy Fox Terrier,Italian Greyhound' },
    { 'answer': '1-B, 2-B, 3-C, 4-B', 'dog': 'Whippet,Dachshund,Miniature Schnauzer' },
    { 'answer': '1-B, 2-B, 3-C, 4-C', 'dog': 'Great Dane,Greyhound,Mastiff' },
    { 'answer': '1-B, 2-C, 3-A, 4-A', 'dog': 'Yorkshire Terrier,Toy Poodle,Maltese' },
    { 'answer': '1-B, 2-C, 3-A, 4-B', 'dog': 'Bichon Frise,King Charles Spaniel,Tibetan Spaniel' },
    { 'answer': '1-B, 2-C, 3-A, 4-C', 'dog': 'Old English Sheepdog,Samoyed,Chow Chow' },
    { 'answer': '1-B, 2-C, 3-B, 4-A', 'dog': 'Havanese,Papillon,Griffon Bruxellois' },
    { 'answer': '1-B, 2-C, 3-B, 4-B', 'dog': 'Finnish Spitz,Keeshond,Norwegian Elkhound' },
    { 'answer': '1-B, 2-C, 3-B, 4-C', 'dog': 'Afghan Hound,Irish Wolfhound,Borzoi' },
    { 'answer': '1-B, 2-C, 3-C, 4-A', 'dog': 'Chinese Crested,Rat Terrier,Manchester Terrier' },
    { 'answer': '1-B, 2-C, 3-C, 4-B', 'dog': 'Basenji,Saluki,Smooth Fox Terrier' },
    { 'answer': '1-B, 2-C, 3-C, 4-C', 'dog': 'Bullmastiff,Leonberger,Irish Setter' },
    { 'answer': '1-C, 2-A, 3-A, 4-A', 'dog': 'Cocker Spaniel,Miniature Poodle,French Bulldog' },
    { 'answer': '1-C, 2-A, 3-A, 4-B', 'dog': 'Australian Shepherd,Border Collie,Belgian Malinois' },
    { 'answer': '1-C, 2-A, 3-A, 4-C', 'dog': 'German Shepherd,Golden Retriever,Doberman Pinscher' },
    { 'answer': '1-C, 2-A, 3-B, 4-A', 'dog': 'Boston Terrier,Cavalier King Charles Spaniel,Tibetan Terrier' },
    { 'answer': '1-C, 2-A, 3-B, 4-B', 'dog': 'Boxer,Vizsla,English Setter' },
    { 'answer': '1-C, 2-A, 3-B, 4-C', 'dog': 'Labrador Retriever,Rhodesian Ridgeback,Weimaraner' },
    { 'answer': '1-C, 2-A, 3-C, 4-A', 'dog': 'Chihuahua,Pug,Dachshund' },
    { 'answer': '1-C, 2-A, 3-C, 4-B', 'dog': 'Basset Hound,American Staffordshire Terrier,Beagle' },
    { 'answer': '1-C, 2-A, 3-C, 4-C', 'dog': 'Great Dane,Mastiff,Saint Bernard' },
    { 'answer': '1-C, 2-B, 3-A, 4-A', 'dog': 'Shih Tzu,Lhasa Apso,Maltese' },
    { 'answer': '1-C, 2-B, 3-A, 4-B', 'dog': 'Australian Cattle Dog,Border Collie,Welsh Springer Spaniel' },
    { 'answer': '1-C, 2-B, 3-A, 4-C', 'dog': 'Bernese Mountain Dog,Collie,Alaskan Malamute' },
    { 'answer': '1-C, 2-B, 3-B, 4-A', 'dog': 'Pekingese,Miniature Pinscher,Japanese Chin' },
    { 'answer': '1-C, 2-B, 3-B, 4-B', 'dog': 'Staffordshire Bull Terrier,Bulldog,Shar Pei' },
    { 'answer': '1-C, 2-B, 3-B, 4-C', 'dog': 'Newfoundland,Siberian Husky,Akita' },
    { 'answer': '1-C, 2-B, 3-C, 4-A', 'dog': 'Italian Greyhound,Toy Fox Terrier,Miniature Schnauzer' },
    { 'answer': '1-C, 2-B, 3-C, 4-B', 'dog': 'Whippet,Scottish Terrier,Airedale Terrier' },
    { 'answer': '1-C, 2-B, 3-C, 4-C', 'dog': 'Rottweiler,Doberman Pinscher,Bloodhound' },
    { 'answer': '1-C, 2-C, 3-A, 4-A', 'dog': 'Yorkshire Terrier,Toy Poodle,Pomeranian' },
    { 'answer': '1-C, 2-C, 3-A, 4-B', 'dog': 'Bichon Frise,Tibetan Spaniel,King Charles Spaniel' },
    { 'answer': '1-C, 2-C, 3-A, 4-C', 'dog': 'Old English Sheepdog,Samoyed,Chow Chow' },
    { 'answer': '1-C, 2-C, 3-B, 4-A', 'dog': 'Havanese,Papillon,Griffon Bruxellois' },
    { 'answer': '1-C, 2-C, 3-B, 4-B', 'dog': 'Finnish Spitz,Keeshond,Norwegian Elkhound' },
    { 'answer': '1-C, 2-C, 3-B, 4-C', 'dog': 'Greyhound,Afghan Hound,Irish Wolfhound' },
    { 'answer': '1-C, 2-C, 3-C, 4-A', 'dog': 'Chinese Crested,Rat Terrier,Manchester Terrier' },
    { 'answer': '1-C, 2-C, 3-C, 4-B', 'dog': 'Basenji,Saluki,Smooth Fox Terrier' },
    { 'answer': '1-C, 2-C, 3-C, 4-C', 'dog': 'Bullmastiff,Leonberger,Irish Setter' },
];

const questionBox = document.querySelector(".questionBox");
const bestChioceBox = document.querySelector(".bestChioceBox");
const closeBtn = document.querySelector('.bestChioceBox .close');
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const submit = document.querySelector(".submit");
const form = document.querySelector('form');
const tit = document.querySelector('.tit');
console.dir(form);
btn.addEventListener("click", (e) => {
    questionBox.style.display = "block";
});

questionBox.addEventListener("click", (e) => {
    if (e.target.classList[0] === "questionBox") {
        questionBox.style.display = "none";
    }
});

submit.addEventListener("click", (e) => {

});

closeBtn.addEventListener('click', (e) => {
    bestChioceBox.style.display = "none";
    questionBox.style.display = "none";
    btn2.style.display = "inline-block";
    tit.innerHTML = '';
});
console.log(answers.length);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const q1 = form.question1.value;
    const q2 = form.question2.value;
    const q3 = form.question3.value;
    const q4 = form.question4.value;
    const result = `1-${q1}, 2-${q2}, 3-${q3}, 4-${q4}`;
    
    answers.forEach((data) => {
        if (data.answer.toUpperCase() === result.toUpperCase()) {
            tit.innerHTML = data.dog;
        }
    });
    bestChioceBox.style.display = "block";
    setTimeout(() => {
        closeBtn.style.display = 'block';
        btn.style.display = 'none';
    }, 1000);
});