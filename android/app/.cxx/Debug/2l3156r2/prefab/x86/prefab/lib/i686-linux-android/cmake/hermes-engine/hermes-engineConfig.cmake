if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/home/Ifryx/.gradle/caches/8.10.2/transforms/a3e9d651bc510bdf1b43157f48206999/transformed/hermes-android-0.76.1-debug/prefab/modules/libhermes/libs/android.x86/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/home/Ifryx/.gradle/caches/8.10.2/transforms/a3e9d651bc510bdf1b43157f48206999/transformed/hermes-android-0.76.1-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

