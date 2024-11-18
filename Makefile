# Here is a simple makefile
# The h5p pack command was not working without a subfolder with a .git in it.
ZIP_COMMAND=zip
TEMP_DIR := $(shell mktemp -d)

concours-veto: H5P.ConcoursVeto
	cd ${TEMP_DIR} && h5p utils get h5p-editor-vertical-tabs font-awesome
	# First build the library.
	cd ${TEMP_DIR} && h5p init H5P.ConcoursVeto
	cd H5P.ConcoursVeto && npm run build && cd ..
	# Build the lib
	mkdir -p "${TEMP_DIR}/h5p-concoursveto"
	rsync -avz H5P.ConcoursVeto/* "${TEMP_DIR}/h5p-concoursveto" --exclude 'node_modules' --exclude 'src'
	cd ${TEMP_DIR} && h5p utils pack h5p-editor-vertical-tabs font-awesome h5p-concoursveto h5p-concoursveto-libs.h5p
	# Now build the activity.
	mkdir ${TEMP_DIR}/h5p-$@
	cp -r $@/content ${TEMP_DIR}/h5p-$@
	cp $@/h5p.json  ${TEMP_DIR}/h5p-$@
	cp $@/icon.svg ${TEMP_DIR}/h5p-$@
	cp ${TEMP_DIR}/h5p-concoursveto-libs.h5p ${TEMP_DIR}/h5p-$@/h5p-concoursveto.h5p
	cd ${TEMP_DIR}/h5p-$@ && $(ZIP_COMMAND) -urD h5p-concoursveto.h5p h5p.json icon.svg content/content.json content/images/*
	cp ${TEMP_DIR}/h5p-concoursveto-libs.h5p .
	cp ${TEMP_DIR}/h5p-$@/h5p-concoursveto.h5p .

