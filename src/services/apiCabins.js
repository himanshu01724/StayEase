import supabase from "./supabase";
import { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log(error);
    throw new Error(`Error loading data from cabins`);
  }

  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error(`Error loading data from cabins`);
  }

  return true;
}

export async function addEditCabin(newCabin) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  console.log(hasImagePath);

  const imageName = `${Math.random()}-${newCabin?.image?.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //https://itbgbenzqcyeirdhfvql.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }]);

  if (error) {
    console.log(error);
    throw new Error(`Error adding cabin to the database`);
  }

  //upload image

  if (hasImagePath) return data;

  const { error: StorageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  console.log("testing");

  if (StorageErrortorageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(StorageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}

export async function editCabinApi(newCabin, id) {
  console.log("coming from api", newCabin, id);
  console.log(id?.editId);
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin?.image?.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  console.log(imagePath, imageName);

  const { data, error } = await supabase
    .from("cabins")
    .update({ ...newCabin, image: imagePath })
    .eq("id", id?.editId);

  if (error) {
    console.log(error);
    throw new Error(`Error adding cabin to the database`);
  }

  if (hasImagePath) return data;

  const { error: StorageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);
  console.log(StorageError);
  return data;
}
